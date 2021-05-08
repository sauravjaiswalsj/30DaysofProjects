#include<iostream>
#include<string>

using std::cout;
int main(){
	enum class Direction {north,south,east,west};
	Direction a=Direction::north;
	switch(a){
		case Direction::north:
			cout<<"North direction is selected";
			break;
		case Direction::south:
			cout<<"South direction is selected";
			break;
		case Direction::east:
			cout<<"East direction is selected";
			break;
		case Direction::west:
			cout<<"West direction is selected";
			break;
		default:			
			cout<<"You seems to be in wrong direction";
	}
}	
