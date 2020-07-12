import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormFirstPage from './FormFirstPageComponent';
import FormSecondPage from './FormSecondPageComponent';
import FormThirdPage from './FormThirdPageComponent'; 
import Confirm from './Confirm';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }
  nextPage = () => {
    const {page} = this.state;
    this.setState({ 
        page: page + 1 
    });
  }

  previousPage = () => {
    const {page} = this.state;
    this.setState({
        page: page - 1 
    });
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (<div>
        {page === 1 && <FormFirstPage onSubmit={this.nextPage}/>}
        {page === 2 && <FormSecondPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 3 && <FormThirdPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 4 && <Confirm previousPage={this.previousPage} onSubmit={onSubmit} />}
      </div>
    )
  }
}

UserForm.propTypes = {
  onSubmit: PropTypes.func
}

export default UserForm;