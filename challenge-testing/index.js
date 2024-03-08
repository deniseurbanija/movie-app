class CarritoCompra {
  constructor() {
    this.carrito = [];
  }
  agregarProducto(producto) {
    if (typeof producto !== "object" || !producto.hasOwnProperty("price")) {
      throw new Error(
        'El producto debe ser un objeto con una propiedad "price".'
      );
    }
    this.carrito.push(producto);
  }
  calcularTotal() {
    let total = 0;
    for (let producto of this.carrito) {
      if (typeof producto.price !== "number") {
        throw new Error("El precio del producto debe ser un número.");
      }
      total += producto.price;
    }
    return total;
  }
  aplicarDescuento(descuento) {
    return this.calcularTotal() * (1 - descuento / 100);
  }
}

module.exports = CarritoCompra;
