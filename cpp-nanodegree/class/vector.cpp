#include<iostream>
#include<vector>

int main(){
	std::vector<int> a1{0,1,2};
	std::vector<int> b2{1,2,3};
	for(int i: a1){
		std::cout<<i<<" ";
	}
	int a=1;
	if(a==1){
		std::cout<<"hello";
	}
	return 0;
}
