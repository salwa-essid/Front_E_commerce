import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SignupBuyer from './SignupBuyer/SignupBuyer'

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
    button: {
        margin: theme.spacing(1),
    },
  }));

class SignupAsBuyer extends Component {
    render(){

        return (
            <div style={{marginTop: '15%'}}>
                <form className={useStyles.container} id="form-login" noValidate autoComplete="off">
                    <SignupBuyer />
                </form>
                <div className="login-footer">
                    <p style={{fontSize: '12px', opacity:'0.5'}}>Before sign up, feel free to verify your informations.</p>
                </div>
        </div>
    )
}
}
export default SignupAsBuyer;