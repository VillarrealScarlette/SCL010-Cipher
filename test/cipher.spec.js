//Describe a quien quiero testear (función)
describe('cipher', () => {
// it es a Quién voy a testear -> el primer parametro es lo que según yo con mi código es lo que hice
// el segundo parametro es lo que debería pasar (lo que ingreso y lo que me devuelve)
  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });
  describe('window.cipher.encode', () => {
    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(window.cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG"); 
    });    
    it ('debería retornar "ñ" para "ñ" con offset 2', () => {
      assert.equal(cipher.encode(2, "ñ"), "ñ");
    });    
    it ('debería retornar "Ñ" para "Ñ" con offset 2', () => {
      assert.equal(cipher.encode(2, "Ñ"), "Ñ");
    });
    it ('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
      assert.equal(cipher.encode(33, "abcdefghijklmnopqrstuvwxyz"), "hijklmnopqrstuvwxyzabcdefg");
    });
    it ('debería retornar "2345678901" para "0123456789" con offset 2', () => {
      assert.equal(cipher.encode(2, "0123456789"), "2345678901");
    });               
});  
  describe('window.cipher.decode', () => {    
    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(window.cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }); 
    it ('debería retornar "ñ" para "ñ" con offset 2', () => {
      assert.equal(cipher.decode(2, "ñ"), "ñ");
    });    
    it ('debería retornar "Ñ" para "Ñ" con offset 2', () => {
      assert.equal(cipher.decode(2, "Ñ"), "Ñ");
    });
    it ('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', () => {
      assert.equal(cipher.decode(33, "hijklmnopqrstuvwxyzabcdefg"), "abcdefghijklmnopqrstuvwxyz");
    });
    it ('debería retornar "0123456789" para "2345678901" con offset 2', () => {
      assert.equal(cipher.decode(2, "2345678901"), "0123456789");
    });  
});
});