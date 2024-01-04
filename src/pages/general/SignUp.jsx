import { z } from "zod"
import { Button } from "../../Components"


const SignUp = () => {

  const inputSchema = z.object({

    name: z.string({
      required_error: "Full Name is required",
      invalid_type_error: "Full Name must be alphabetic"
    }).min(1),

    email: z.string().email({
      message: "Invalid email address"
    }),

    password: z.string({
      required_error: "Password is required",
      invalid_type_error: "Password must be alphanumeric"
    }).min(6)

  })


  return (
    <div>
        <section className="p-14 bg-gray-50">
            <div className="w-96 min-h-96 mx-auto shadow bg-white p-6">
              <div className="">
                <div className="input form-control flex flex-col gap-0.5 mb-4">
                  <label className="text-sm" htmlFor="name">Full Name</label>
                  <input type="text" name="name" placeholder="e.g John Doe" className="border p-3"/>
                </div>

                <div className="input form-control flex flex-col gap-0.5 mb-4">
                  <label className="text-sm" htmlFor="email">Email Address</label>
                  <input type="email" name="email" placeholder="e.g JohnDoe@gmail.com" className="border p-3"/>
                </div>

                <div className="input form-control flex flex-col gap-0.5 mb-4">
                  <label className="text-sm" htmlFor="email">Password</label>
                  <input type="password" name="email" placeholder="*********" className="border p-3"/>
                </div>

                <div className="input form-control flex flex-col gap-0.5 mb-4">
                  <label className="text-sm" htmlFor="email">Confirm Password</label>
                  <input type="password" name="email" placeholder="**********" className="border p-3"/>
                </div>

                <Button.Md className="w-full bg-red-500 text-white py-3 shadow">Sign Up</Button.Md>
              </div>
            </div>
        </section>
    </div>
  )
}

export default SignUp