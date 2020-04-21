#include<iostream>
#include<vector>
#include<fstream>
#define Fo for(int i=0;i<board.size();i++)

void PrintBoard(std::vector<std::vector<int>> board){
	Fo{
	 for(int j=0;j<board.size();j++){
		 std::cout<<board[i][j];
	 }
	std::cout<<"\n";
	}
}

void ReadBoardFile(String fileName){
	std::fstream iofile{fileName,ios::in | ios::out};
	if(!iofile){
		std::cerr<<"File does not exist.\n";
		return 0;
	}

}
int main(){
	std::vector<std::vector<int>> board={{0, 1, 0, 0, 0, 0},
 {0, 1, 0, 0, 0, 0},
 {0, 1, 0, 0, 0, 0},
 {0, 1, 0, 0, 0, 0},
 {0, 0, 0, 0, 1, 0}};
	PrintBoard(board);
	return 0;
}


