#include<iostream>
#include<vector>
#include<sstream>
using std::string;
using std::cout;
using std::cin;
using std::vector;
using std::istringstream;
int main(){
	string line;
	getline(cin,line);
	vector<int> list;
	istringstream stream(line);
	int n;
	while(stream){
		stream>>n;
		if(stream){
			list.push_back(n);
		}	
	}
	for(int i:list){
		cout<<i<<"\n";
	}
	return 0;
}
