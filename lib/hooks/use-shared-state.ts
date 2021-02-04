import useSWR from 'swr'
import { mutateCallback } from 'swr/dist/types'

export const useSharedState = <T>(
  key: string,
  initial: T
): [
  T,
  (
    data?: T | Promise<T> | mutateCallback<T>,
    shouldRevalidate?: boolean
  ) => Promise<T>
] => {
  const { data: state, mutate: setState } = useSWR<T>(key, {
    initialData: initial,
  })

  return [state, setState]
}
