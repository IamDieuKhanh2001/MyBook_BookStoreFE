'use client'
import { useState, useEffect } from 'react';

const useCountdown = (initialHours: number, initialMinutes: number, initialSeconds: number) => {
    const [time, setTime] = useState({
        hours: initialHours,
        minutes: initialMinutes,
        seconds: initialSeconds,
    });

    useEffect(() => {
        setTime({
            hours: initialHours,
            minutes: initialMinutes,
            seconds: initialSeconds,
        });
    }, [initialHours, initialMinutes, initialSeconds]);

    useEffect(() => {
        let countdownInterval = setInterval(() => {
            setTime(prevTime => {
                if (prevTime.hours === 0 && prevTime.minutes === 0 && prevTime.seconds === 0) {
                    clearInterval(countdownInterval);
                    return prevTime;
                }

                const newSeconds = prevTime.seconds - 1;
                const newMinutes = prevTime.minutes - (newSeconds < 0 ? 1 : 0);
                const newHours = prevTime.hours - (newMinutes < 0 ? 1 : 0);

                return {
                    hours: newHours >= 0 ? newHours : 0,
                    minutes: newMinutes >= 0 ? newMinutes : 0,
                    seconds: newSeconds >= 0 ? newSeconds : 59,
                };
            });
        }, 1000);

        return () => clearInterval(countdownInterval); //Cleanup function
    }, [initialHours, initialMinutes, initialSeconds]);

    return time;
};

export default useCountdown;
