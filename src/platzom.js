
export default function platzom(str)
{
	let translation = str

	//Primera condicion si la palabra termina en "ar"
	//se le quitan esos dos caracteres
	if ( str.toLowerCase().endsWith ("ar"))
	{
		translation = str.slice(0, -2)
	}
	//
	if (str.toLowerCase().startsWith("z"))
	{
		translation += "pe"
	}
	const length = translation.length
	if (length >= 10)
	{
		const firshalf = translation.slice(0, Math.round(length / 2))
		const secondHalt = translation.slice(Math.round(length / 2))
		translation = `${firshalf}-${secondHalt}`
	}
	const reverse = (str) => str.split("").reverse().join("")

	function minMay(str)
	{
		const length = str.length
		let translation = ""
		let capitalize = true
		for (let i = 0; i < length; i++)
		{
			const char = str.charAt(i)
			translation += capitalize ? char.toUpperCase() : char.toLowerCase()
			capitalize = !capitalize
		}
		return translation
	}
	if (str == reverse(str))
	{
		return minMay(str)
	}
	return translation
}
