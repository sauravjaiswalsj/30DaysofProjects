#include<iostream>
#include<vector>
#include<string>
#include<fstream>
#include<sstream>

using std::vector;
using std::cout;
using std::cin;
using std::string;
using std::ifstream;
using std::istringstream;
using std::endl;

#define Fo1 for(int i=0;i<board.size();i++)
#define Fo2 for(int j=0;j<board[i].size();j++)

vector<int> ParseLine(string line){
	vector<int> row;
	istringstream stream(line);
	int n; char c;
	while(stream>>n>>c){
		if(stream){
			row.push_back(n);
		}
	}
	return row;
}
vector<vector<int>> ReadFile(string path){
	// ifstream loads file
	ifstream file;
	file.open(path);
	vector<vector<int>> board;
	if(file){
		string line;
		while(getline(file,line)){	
			board.push_back(ParseLine(line));
		}
	}
	return board;
}
vector<vector<int>> ShortestPath(vector<vector<int>> board){
}

int main(void){
	auto board=ReadFile("board.txt");
	Fo1{
		Fo2{
			cout<<board[i][j];
		}
		cout<<endl;
	}
	return 0;
}
