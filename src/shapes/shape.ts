// base abstract class
abstract class Shape {
  protected program;

  constructor(
    protected canvas: HTMLCanvasElement,
    protected gl: WebGLRenderingContext
  ) {
    this.program = gl.createProgram();
  }

  abstract render(): void;

  protected createShader(shaderType: number, source: string): WebGLShader {
    const shader = this.gl.createShader(shaderType);
    this.gl.shaderSource(
      shader,
      // varying is for gradient
      source
    );
    this.gl.compileShader(shader);
    // attach shader to the program
    this.gl.attachShader(this.program, shader);
    return shader;
  }

  protected linkProgram() {
    this.gl.linkProgram(this.program);
  }
}

export default Shape;
