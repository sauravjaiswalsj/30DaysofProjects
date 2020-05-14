// preprocessor directives
#include<iostream>
#include<string>
#include<sstream>
#include<vector>
#include<fstream>

// defining namespaces

using std::cout;
using std::vector;
using std::string;
using std::ifstream;
using std::istringstream;
using std::endl;
enum class State {kEmpty, kObstacle};

//Read Board File

vector<State> ParseLine(string line){
	istringstream stream(line);
	int n;
	char c;
	vector<State> row;
	while(stream>>n>>c){
		if(stream){
			if(n==0){
				row.push_back(State::kEmpty);
			}else{
				row.push_back(State::kObstacle);
			}
		}
	}
	return row;
}
vector<vector<State>> ReadBoardFile(string path){
	ifstream file;
	file.open(path);
	vector<vector<State>> board;
	if(file){
		string line;
		while(getline(file,line)){
			board.push_back(ParseLine(line));
		}
	}
	return board;
}

string CellString(State state){
	switch(state){
		case State::kObstacle:
			return "⛰️   ";
			break;
		default:
			return "0 ";
	}
}
//PrintBoard
void PrintBoard(const vector<vector<State>> board){
	for(int i=0;i<board.size();i++){
		for(int j=0;j<board[i].size();j++){
			cout<<CellString(board[i][j]);
		}
		cout<<endl;
	}
}

int main(void){
	auto board = ReadBoardFile("board.txt");
	PrintBoard(board);
	return 0;
}
