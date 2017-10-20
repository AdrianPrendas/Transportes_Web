
import java.io.Serializable;

/******************************************************************************
 *  Compilation:  javac Point.java
 *  Execution:    java Point
 *
 *  Immutable data type for 2D points.
 *
 ******************************************************************************/

public class Point implements Serializable{ 
    private double x;   // Cartesian
    private double y;   // coordinates
   
    // create and initialize a point with given (x, y)
    public Point(double x, double y) {
        this.x = x;
        this.y = y;
    }

    // return Euclidean distance between invoking point p and q
    public double distanceTo(Point that) {
        double dx = this.x - that.x;
        double dy = this.y - that.y;
        return Math.sqrt(dx*dx + dy*dy);//pitagoras
    }

    // return string representation of this point
    public String toString() {
        return "\n{x: " + x + ", y: " + y + "}\n";
    }

}