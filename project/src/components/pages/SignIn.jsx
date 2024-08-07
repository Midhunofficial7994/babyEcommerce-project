import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/Context";
import toast, { Toaster } from "react-hot-toast";

const SignIn = () => {
  const navigate = useNavigate();
  const { user, setIslogged } = useContext(ProductContext);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
  });

  const onSubmit = (values) => {
    
    const foundUser = user.find(item => item.email === values.email && item.password === values.password);
    
    // console.log(fout\\.id)
  

    const admindata=user.find(item=>values.email === 'admin@gmail.com' && values.password === '12345678');
if(admindata){
  toast.success('welcome admin');
                    localStorage.setItem('id', admindata.id);
                    setIslogged(true);
                    // console.log(isLogged);
                      setTimeout(() =>
                       navigate("/admin")
                    , 1000);
}
    
    else if (foundUser) {
      localStorage.setItem('id', foundUser.id);  
      // console.log(foundUser,'alskjdf')
      setIslogged(true);
      toast.success('Login successful');
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } 
    else {
      toast.error('Invalid email or password');
    }
  };

  const handleSignUpClick = () => {
    // console.log('fhaalskdjf');
    navigate('/registration');
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <Toaster />
      <h1 className="text-2xl font-bold mb-5 text-center">Sign In</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-xs italic"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-xs italic"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
          </div>

          <div className="flex items-center justify-between mt-4">
            <p className="text-gray-600 text-sm">
              Don't have an account?
              <button
                type="button"
                className="text-blue-500 hover:text-blue-700 font-bold ml-1"
                onClick={handleSignUpClick}
              >
                Sign Up
              </button>
            </p>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SignIn;
