import Image from "next/image";
import Link from "next/link";
import { login_logo, Google_logo, Github_logo } from "@/public/assets";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";


const LogIn = () => {
    return (
        <div className="w-full lg:grid h-screen lg:grid-cols-2">
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Login</h1>
                        <p className="text-balance text-muted-foreground">
                            Enter your email below to login to your account
                        </p>
                    </div>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="john@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <Link
                                    href="/forgot-password"
                                    className="ml-auto inline-block text-sm underline"
                                >
                                    Forgot your password?
                                </Link>
                            </div>
                            <Input id="password" type="password" required />
                        </div>
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                        <Separator className={"my-5"} />
                        <Button variant="outline" className="w-full gap-x-2">
                            <Image
                                src={Google_logo}
                                alt={"google logo"}
                                height={19}
                                width={18}
                            />
                            Login with Google
                        </Button>
                        <Button variant="outline" className="w-full gap-x-2">
                            <Image
                                src={Github_logo}
                                alt={"google logo"}
                                height={19}
                                width={18}
                            />
                            Login with GitHub
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link href="/auth/signup" className="underline">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hidden bg-muted lg:block">
                <Image
                    src={login_logo}
                    alt="Image"
                    width="1920"
                    height="960"
                    className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
        </div>
    )
}

export default LogIn;
