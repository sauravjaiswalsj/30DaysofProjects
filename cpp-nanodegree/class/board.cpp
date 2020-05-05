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

enum class State {kEmpty,kObstacle} state;

vector<State> ParseLine(string line){
	istringstream stream(line);
	int n;
	char c;
	vector<State> row;
	while(stream){
		stream>>n;
		stream>>c;
		if(stream){
			if(n==0){
				row.push_back(State::kEmpty);
			}
			else{
				row.push_back(State::kObstacle);
			}
		}
	}
	return row;
}

vector<vector<State>> ReadBoardFile(string path){
	ifstream myfile;
	myfile.open(path);
	vector<vector<State>> board;
	if(myfile){
		string line;
		while(getline(myfile,line)){
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
void PrintBoard(const vector<vector<State>> board){
	for(int i=0;i<board.size();i++){
		for(int j=0;j<board[i].size();j++){
			cout<<CellString(board[i][j]);
		}
		cout<<"\n";
	}
}

int main(void){
	//vector<vector<int>> board;
	auto board=ReadBoardFile("board.txt");
	PrintBoard(board);
}

