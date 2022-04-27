import java.util.*;
import javax.swing.*;

public class SpeakerDelay{
    public static void main(String[] dth){

        int index = 0;
        int roomTemperature = 18;
        double speakerDistance = 0;
        int replay = 1;
        
        double[][] soundSpeed = {{18,19,20,21,22,23,24,25}, {341.97,342.56,343.15,343.73,344.31,344.9,345.48,346.06}};

        while(replay>0){
            try{   
                roomTemperature = Integer.parseInt(JOptionPane.showInputDialog("Enter room temperature in Celsius."));
    
                speakerDistance = Double.parseDouble(JOptionPane.showInputDialog("Enter distance between speakers in meters."));

                if(roomTemperature>17 && roomTemperature<26){
                    replay =0;
                } else{
                    JOptionPane.showMessageDialog(null, "Please insert a temperature between 18 - 25 degrees Celsius.");
                    replay++;
                }
    
            } catch(NumberFormatException e){
                JOptionPane.showMessageDialog(null, "Please enter a number.");
                replay ++;
            }

        }
        
        
        for(int i = 0; i<7; i++){
            if(soundSpeed[0][i] == roomTemperature){
                index = i;
            }
        }

        double speakerDelay = (speakerDistance * 1000)/soundSpeed[1][index];
        JOptionPane.showMessageDialog(null, "Delay time is " + speakerDelay + " ms.");
        
    }
}