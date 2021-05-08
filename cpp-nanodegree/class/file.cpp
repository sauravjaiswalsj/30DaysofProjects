#include<iostream>
#include<fstream>
#include<string>

using std::string;
using std::cout;
using std::ifstream;

int main(){
	ifstream fileName;
	fileName.open("2d.cpp");
	if(fileName){
		cout<<"file exist"<<"\n";
	}
	std::string line;
	while(getline(fileName, line)){
		cout<<line<<" ";
	}
	


}
