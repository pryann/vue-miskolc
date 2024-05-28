import { readonly, ref } from 'vue'
import { useToast } from 'vue-toastification'

const toast = useToast()
const guitars = ref([])

export function useGuitarsStore() {
  async function fetchGuitars() {
    try {
      const response = await fetch('http://localhost:3002/guitars')
      guitars.value = await response.json()
    } catch {
      toast.error('Error fetching guitars')
    }
  }

  return {
    guitars: readonly(guitars),
    fetchGuitars
  }
}
