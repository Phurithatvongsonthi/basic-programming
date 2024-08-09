const str : string = 'นาย ภูริทัต วงษ์สนธิ'

console.log(str.slice(3,11))


function getPrefix (fullName : string ) {
       if(fullName.includes('นาย')){
        return 'นาย'
       } else if (fullName.includes('นางสาว')){
        return 'นางสาว'
       }else {
         return '-'
       }
}

  console.log(getPrefix('นาย ภูริทัต วงษ์สนธิ'))
  