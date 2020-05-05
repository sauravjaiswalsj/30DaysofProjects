#include<iostream>
#include<string>
#include<sstream>
#include<vector>
#include<fstream>

using std::cout;
using std::ifstream;
using std::istringstream;
using std::string;
using std::vector;

vector<int> ParseLine(string line){
	istringstream stream(line);
	int n;
	char c;
	vector<int> row;
	while(stream){
		stream>>n;
		stream>>c;
		if(stream){
			row.push_back(n);
		}
	}
	return row;
}

vector<vector<int>> ReadBoardFile(string path){
	ifstream myfile;
	myfile.open(path);
	vector<vector<int>> board;
	if(myfile){
		string line;
		while(getline(myfile,line)){
			board.push_back(ParseLine(line));
		}
	}
	return board;
}

void PrintBoard(const vector<vector<int>> board){
	for(int i=0;i<board.size();i++){
		for(int j=0;j<board[i].size();j++){
			cout<<board[i][j];
		}
		cout<<"\n";
	}
}

int main(void){
	vector<vector<int>> board;
	board=ReadBoardFile("board.txt");
	PrintBoard(board);
}

