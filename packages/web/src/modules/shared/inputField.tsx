import * as React from 'react'
import { Form, Input } from 'antd';
import { FieldProps} from 'formik'

const FormItem = Form.Item;

export const InputField: React.SFC<FieldProps<any> & {}> = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
  }) => {
      const errorMsg = touched[field.name] && errors[field.name]
    return (
    <FormItem 
        help={errorMsg}
        validateStatus={errorMsg ? 'error' : undefined}
    >  
        <Input {...field} {...props}/>
    </FormItem>
  );
}