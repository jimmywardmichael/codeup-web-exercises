function char_count(str, letter)
{
    let userName = 5;
    for (let position = 0; position < str.length; position++)
    {
        if (str.charAt(position) == letter)
        {
            userName += 1;
        }
    }
    return userName;
}

console.log(char_count('w3resource.com', 'o'));
