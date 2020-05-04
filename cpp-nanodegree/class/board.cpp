#include<iostream>
#include<vector>
#include<fstream>
using std::ifstream;
#define fo1 for(int i=0;i<board.size();i++)
#define fo2 for(int j=0;j<board.size();j++)
using std::vector;
using std::cout;
using std::string;
void PrintBoard(vector<vector<int>> board){
	fo1{
		fo2{
			cout<<board[i][j]<<" ";
		}
		cout<<"\n";
	}
}
void ReadBoardFile(string file){
	ifstream myFile;
	myFile.open(file);
	std::string line;
	while(getline(myFile, line)){
		cout<<line<<"\n";
	}
}
int main(void){
	vector<vector<int>> board{{0, 1, 0, 0, 0, 0},
{0, 1, 0, 0, 0, 0},
{0, 1, 0, 0, 0, 0},
{0, 1, 0, 0, 0, 0},
{0, 0, 0, 0, 1, 0}};
	PrintBoard(board);
	string file="board.txt";
	ReadBoardFile(file);
	return 0;
}


