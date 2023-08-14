"use client"

import { Typography } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import React from 'react'

const TestPage = () => {
    const { data: session } = useSession();

    return (
        <div className="bg-gradient-to-b from-cyan-50 to-cyan-200 p-2 flex gap-5 ">
            <Typography>Sample for login with next auth, will be delete in future</Typography>
            <h1>Status: {session?.user ? ("Is Login") : ("not login")}</h1>
            {session?.user ? (
                <>
                    <p>
                        jwt: {session?.user.jwtToken}
                    </p>
                    <p>
                        refresh: {session?.user.refreshToken}
                    </p>
                    <p>
                        Username: {session?.user.userInfo?.userName}
                    </p>
                    <p>
                        id: {session?.user.userInfo?.id}
                    </p>
                    <p>
                        ROLE name: {session?.user.userInfo?.roles[0].roleName}
                    </p>
                </>
            ) : (
                "No login info"
            )}

            <div className="ml-auto flex gap-2">
                {session?.user ? (
                    <>
                        <button className="text-red-500" onClick={() => signOut()}>
                            Sign Out
                        </button>
                    </>
                ) : (
                    <button className="text-green-600" onClick={() => signIn()}>
                        Sign In
                    </button>
                )}
                <button onClick={() => console.log(session)}>session</button>
            </div>
        </div>
    )
}

export default TestPage
