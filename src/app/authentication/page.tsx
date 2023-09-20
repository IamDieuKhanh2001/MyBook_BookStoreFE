"use client"

import { CardContent, Grid, Typography } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

const TestPage = () => {
    const { data: session, update } = useSession();
    const searchParams = useSearchParams();
    const isSessionExpired = searchParams ? searchParams.get("isSessionExpired") === "true" : false;

    return (
        <div className="bg-gradient-to-b from-cyan-50 to-cyan-200 p-2 flex gap-5 ">
            {/* {encodedSessionIsExpired} */}
            {isSessionExpired === true && (
                <Grid item sm={12}>
                    <CardContent>
                        <Typography variant="h5" sx={{ color: (theme) => theme.palette.warning.main }}>
                            Your Session Has Been expired
                        </Typography>

                        <Typography variant="body1" sx={{ color: (theme) => theme.palette.warning.main }}>
                            Sorry, please login again!
                        </Typography>
                    </CardContent>
                </Grid>
            )}
            {isSessionExpired}
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
                        Email: {session?.user.userInfo?.email}
                    </p>
                    <p>
                        id: {session?.user.userInfo?.id}
                    </p>
                    <p>
                        ROLE name: {session?.user.userInfo?.userRole.name}
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
                        <button onClick={async () => {
                            if (session) {
                                await update({
                                    ...session,
                                    user: {
                                        ...session?.user,
                                        jwtToken: "new jwt",
                                        refreshToken: "new refresh",
                                    }
                                })
                            }
                        }}>add new token</button>
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
