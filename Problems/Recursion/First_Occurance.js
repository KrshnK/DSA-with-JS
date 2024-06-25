/* arr = [2,4,1,5,1,8]
   findMe = 1
   currIndex = 0
   -> Output = 2
   if not found = -1 */

   // Iterative 

   function firstOcc(arr,findMe,currIndex){
      while(currIndex < arr.length){
         if(arr[currIndex] === findMe){
            return currIndex
         }
         currIndex++
      }
      return -1
   }

   // console.log(firstOcc([2,4,4,8,1],1,0))
   
   // Recursive
   function recFirstOcc(arr,findMe,currIndex){
      if(currIndex == arr.length){
         return -1
      }
      if(arr[currIndex] == findMe){
         return currIndex
      }
      return recFirstOcc(arr,findMe,currIndex+1)
   }
   
   console.log(recFirstOcc([2,4,1,4,8],1,0))