// Алтернатива защита типов

type User = {
    name: string,
    displayNmae: string | null
}

function assertDisplayName(user: User): asserts user is User & {displayNmae:string}{
    if (!user.displayNmae) throw new Error('User has no display NA')
    
}
function logUserDisplayName(user: User) {
    assertDisplayName(user)
    if (!user.displayNmae) throw new Error('User has no display NA')
    console.log(user.displayNmae.toUpperCase())
}
