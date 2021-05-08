#include<iostream>
#include<sstream>
#include<sstream>

using std::string;
using std::istringstream;
using std::cout;

int main(void){
	string s("1 2 3 4");
	istringstream stream(s);
	int n;
	while(stream){
		stream>> n;
		if(stream){
			cout<<n<<"\n";
		}
		
	}
}
