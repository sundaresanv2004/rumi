import Image from "next/image"
import Link from "next/link"
import {Github_logo, Google_logo, login_logo} from "@/public/assets"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Separator} from "@/components/ui/separator";


const SignUp = () => {
    return (
        <div className="w-full lg:grid h-[100vh] lg:grid-cols-2">
            <div className="hidden bg-muted lg:block">
                <Image
                    src={login_logo}
                    alt="Image"
                    width="1920"
                    height="960"
                    className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Sign Up</h1>
                        <p className="text-balance text-muted-foreground">
                            Enter your information to create an account
                        </p>
                    </div>
                    <div className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="first-name">First name</Label>
                                <Input id="first-name" placeholder="Max" required/>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="last-name">Last name</Label>
                                <Input id="last-name" placeholder="Robinson" required/>
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="max@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                            </div>
                            <Input id="password" type="password" required/>
                        </div>
                        <Button type="submit" className="w-full">
                            Sign Up
                        </Button>
                        <Separator className={"my-5"}/>
                        <Button variant="outline" className="w-full gap-x-2">
                            <Image
                                src={Google_logo}
                                alt={"google logo"}
                                height={19}
                                width={18}
                            />
                            Sign up with Google
                        </Button>
                        <Button variant="outline" className="w-full gap-x-2">
                            <Image
                                src={Github_logo}
                                alt={"google logo"}
                                height={19}
                                width={18}
                            />
                            Sign up with GitHub
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Already have an account?{" "}
                        <Link href="/auth/login" className="underline">
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignUp;
