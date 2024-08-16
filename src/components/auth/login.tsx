import {
  Button,
  Label,
  Input,
  DialogContent,
  Dialog,
  DialogTrigger,
  DialogTitle,
  DialogHeader,
  DialogDescription,
} from "@/components/ui";

import Link from "next/link";
import { GoogleIcon } from "../svgs";

export default function Modal() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button size="sm" variant={"outline"}>
            Login
          </Button>
        </DialogTrigger>
        <DialogContent className=" sm:max-w-[425px]">
          <DialogHeader className="mt-5">
            <DialogTitle className="flex  justify-between">
              <div>
                <h3 className="font-light">
                  Welcome to <span className="text-btn-primary"> Eventful</span>{" "}
                </h3>
              </div>
              <div className="text-xs font-light text-start">
                <p className="text-black/50">No account?</p>
                <Link className="text-btn-primary" href={"/auth/login"}>
                  Sign uo
                </Link>
              </div>
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-start">
            <h2 className="text-2xl mb-2">Sign in</h2>
            <Button
              className="bg-blue-100 gap-3 w-full text-btn-primary rounded-lg"
              variant="default"
            >
              <GoogleIcon />
              Sign in with Google
            </Button>
          </DialogDescription>
          <form className="space-y-4">
            <div>
              <Label className="mb-2 block" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                placeholder="Enter your email address"
                type="email"
                required
                name="email"
              />
            </div>
            <div>
              <Label className="mb-2 block" htmlFor="password">
                Password
              </Label>
              <Input
                id="password"
                placeholder="Enter your password"
                type="password"
                required
                name="email"
              />
            </div>
            <div className="pt-5">
              <Button className="w-full">Sign in</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
