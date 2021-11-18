import { useEffect, useState } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'


export const useLogout = () => {
    const [IsCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const logout = async () => {
        setError(null)
        setIsPending(true)

        try {
            await projectAuth.signOut()

            dispatch({ type: 'LOGOUT' })

            if (!IsCancelled) {
                setError(null)
                setIsPending(true)
            }



        }
        catch (err) {
            if (!IsCancelled) {
                console.log(err.message)
                setError(err.message)
                setIsPending(false)
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    })

    return { logout, error, isPending }
}