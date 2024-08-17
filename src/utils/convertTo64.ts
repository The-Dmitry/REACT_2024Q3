export default async function convertTo64(file: File): Promise<string> {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  return new Promise((resolve) => {
    reader.onload = () => {
      resolve(reader.result as string)
    }
  })
}
