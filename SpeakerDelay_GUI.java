import java.awt.Color;
import java.io.*;
import java.util.Arrays;
import java.util.stream.*;
import javax.swing.*;
import java.awt.*;

public class SpeakerDelay_GUI {
  public static void main (String[] args){

    JFrame frame = new JFrame();
    frame.setSize(420,420);
    frame.setTitle("SpeakerDelayCalculator");
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setResizable(false);
    
    
    frame.setVisible(true);
    
    ImageIcon logo = new ImageIcon("AppIcon.jpg");
    frame.setIconImage(logo.getImage());

    frame.getContentPane().setBackground(Color.green);

  }
}