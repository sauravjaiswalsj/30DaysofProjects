#include<iostream>
#include<vector>
#define for
using std::vector;
using std::cout;

int main(void){
	vector<vector<int>> v1{{1,2},{2,3}};
	for(int i:v1){
		cout<<i<<" ";
	}
	return 0;
}
