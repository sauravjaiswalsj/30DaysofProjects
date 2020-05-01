#include<iostream>
#include<vector>
#define fo1 for(int i=0;i<board.size();i++)
#define fo2 for(int j=0;j<board.size();j++)
using std::vector;
using std::cout;

void PrintBoard(vector<vector<int>> board){
	fo1{
		fo2{
			cout<<board[i][j]<<" ";
		}
		cout<<"\n";
	}
}

int main(void){
	vector<vector<int>> board{{0, 1, 0, 0, 0, 0},
{0, 1, 0, 0, 0, 0},
{0, 1, 0, 0, 0, 0},
{0, 1, 0, 0, 0, 0},
{0, 0, 0, 0, 1, 0}};
	PrintBoard(board);
	return 0;
}


