const CarritoCompra = require("../index");

describe("Test de carrito de compra", () => {
  let carritoCompra;

  beforeEach(() => {
    carritoCompra = new CarritoCompra();
  });

  it("el carrito debe ser un array", () => {
    expect(carritoCompra.carrito).toEqual([]);
  });

  it("agregarProducto() debe estar definido", () => {
    expect(carritoCompra.agregarProducto).toBeDefined();
  });
  it("calcularTotal() debe estar definido", () => {
    expect(carritoCompra.calcularTotal).toBeDefined();
  });
  it("aplicarDescuento() debe estar definido", () => {
    expect(carritoCompra.aplicarDescuento).toBeDefined();
  });

  it("agregarProducto() debe recibir un objeto (producto) y agregarlo al carrito", () => {
    carritoCompra.agregarProducto({ name: "Book", price: 20 });
    expect(carritoCompra.carrito).toEqual([{ name: "Book", price: 20 }]);
  });

  it("calcularTotal() debe calcular el total", () => {
    expect(carritoCompra.calcularTotal()).toEqual(20);
  });

  it("aplicarDescuento() debe aplicar porcentaje especificado", () => {
    expect(carritoCompra.aplicarDescuento(50)).toBe(10);
  });
});
