import * as React from 'react'
import { Form, Icon, Button } from 'antd';
import { withFormik, FormikValues, FormikErrors, FormikProps, Field} from 'formik'
import { validUserSchema } from '@abb/common'
import { InputField } from '../shared/inputField';
const FormItem = Form.Item;

interface FormValues {
    email: string,
    password: string
}

interface Props {
    submit: (values: FormValues) => Promise<FormikErrors<FormikValues> | null >
}
class C extends React.Component<FormikProps<FormValues> & Props> {
  render() {
      const {handleSubmit} = this.props
    return (
        <form style={{display:"flex"}} onSubmit={handleSubmit}>         
            <div style={{width:400, margin: "auto"}}> 
                    <Field
                        name="email"
                        // tslint:disable-next-line:jsx-no-multiline-js
                        prefix={<Icon
                            type="user"
                            style={{ color: 'rgba(0,0,0,.25)' }}
                        />}
                        placeholder="Username"
                        component={InputField}
                    />
                    <Field
                        name="password"
                        type="password"
                        // tslint:disable-next-line:jsx-no-multiline-js
                        prefix={<Icon
                            type="lock"
                            style={{ color: 'rgba(0,0,0,.25)' }}
                        />}
                        placeholder="Password"
                        component={InputField}
                    />
                <FormItem>
                <a className="login-form-forgot" href="">Forgot password</a>
                </FormItem>
                <FormItem>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Register
                </Button>
                </FormItem>
                <FormItem>
                Or <a href="">login now!</a>
                </FormItem>
            </div>
        </form>
    );
  }
}



export const RegisterView = withFormik<Props,FormValues>({
    validationSchema: validUserSchema,
    // validateOnBlur: false,
    mapPropsToValues: () => ({email: '', password: ''}),
    handleSubmit: async (values,{props, setErrors, setSubmitting}) => {
        const errors = await props.submit(values)
        if(errors){
            setErrors(errors)
        }
    }
})(C)