function calculateMinCost() {
var n =arr.length;
	var sum=0;
	for(var i=0; i<n; i++)
		{
			sum+=arr[i]+arr[i+1];
		}
	arr.sort();
	System.out.println(sum);
  
  
  
}  
