package tictactoe;
import org.jetbrains.annotations.NotNull;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.*;
import java.lang.System;

/**
 * The type Board simulation.
 */
class BoardSimulation{
    private final char[][] board;

    /**
     * Instantiates a new Board simulation.
     */
    public BoardSimulation() {
        board = new char[3][3];
        for(char[] arr: board) {
            Arrays.fill(arr,'-');
        }
    }

    /**
     * Set board.
     *
     * @param input the input
     */
    public void setBoard(char[][] input){
        for(int i=0;i<board.length;i++){
            System.arraycopy(input[i], 0, this.board[i], 0, board[i].length);
        }
    }

    /**
     * Display board.
     */
    public void displayBoard(){
        System.out.println("\t\t\t\t  _______________");
        for(char[] arr:board) {
            System.out.print("\t\t\t\t  |");
            for (char c : arr)
                System.out.print("\t"+c);
            System.out.println("\t|");
        }
        System.out.println("\t\t\t\t  _______________");
    }
    /**
     *  Check for winner
     *
     */
    class State{
        boolean check=false;
        char value='_';
    }
    protected ArrayList<State>  winnerChecker(){
        State s= new State();
        ArrayList<State> li = new ArrayList<>();
        for(int i=0;i<board.length;i++){
            for(int j=1;j<board[i].length-1;j++) {
                if ((board[i][j] == board[i][j - 1]) && (board[i][j] == board[i][j + 1])) {
                    s.check=true;
                    s.value=board[i][j];
                    li.add(s);
                    return li;
                } else if ((board[j - 1][i] == board[j][i]) && ((j+1<board.length)&&(board[j + 1][i] == board[j][i]))){
                    s.check=true;
                    s.value=board[i][j];
                    li.add(s);
                    return li;
                }
            }
        }
        if((board[0][0]==board[1][1]) && (board[1][1]==board[2][2])){
            s.check=true;
            s.value=board[1][1];
            li.add(s);
        }else if((board[0][2]==board[1][1]) &&(board[2][0]==board[1][1])){
            s.check=true;
            s.value=board[1][1];
            li.add(s);
        }else{
            s.check=false;
            s.value='-';
            li.add(s);
        }
        return li;
    }
}

/**
 * The type Tic tac toe.
 */
public class TicTacToe {
    /**
     * The constant br.
     */
    public static final BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    /**
     * The entry point of application.
     *
     * @param args the input arguments
     * @throws IOException the io exception
     */
    public static void main(String[] args) throws IOException{
        BoardSimulation simulation = new BoardSimulation();
        // Building the board simulations
        System.out.println("\t\t------------ Welcome To-------------");
        System.out.println("\t\t--------- Tic Tac Toe Game-------------");
        System.out.println();
        String input = br.readLine();
        simulation.setBoard(to2dArray(input));
        final ArrayList<BoardSimulation.State> states = simulation.winnerChecker();
        // Display board
        simulation.displayBoard();

        // Print winner
        if(states.get(0).check){
            System.out.println(states.get(0).value + " has won the game");
        }else{
            System.out.print("Draw");
        }
    }

    /**
     *
     * @param input input
     * @return char[][]
     */
    private static char[]@NotNull[] to2dArray(String input) {
        char[][] arr = new char[3][3];
        int k=0;
        for(int i=0;i<3;i++){
            for(int j=0;j<3;j++){
                arr[i][j]=input.charAt(k);
                k++;
            }
        }
        return arr;
    }
}
