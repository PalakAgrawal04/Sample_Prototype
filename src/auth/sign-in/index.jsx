import { SignIn} from "@clerk/clerk-react";

function SignInPage() 
{
  return (
    <div className="flex justify-center my-20 items-center"> {/* flex is allows the elements distribute space wiithin the container, justify is for the horizontal purposes and items is for the vertical purposes*/ }
        <SignIn/>
    </div>
  );
}

export default SignInPage;
