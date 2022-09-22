function last_Elem(array, n) {

    
    if (n == null) 
    return array[array.length - 1];

    return array.slice(array.length - n);



  };
  const array2= ['1','2','3','4','a','b','c','d']

  console.log(last_Elem(array2))

  console.log(last_Elem(array2,6))
