/*using System;
using System.Collections.Generic;
using System.Linq;
using ProjectSem3.Models;
using ProjectSem3.Data;

namespace ProjectSem3.Services
{
    public interface IWarehouseService
    {
        int GetQuantityProduct(int productId);
        List<WarehouseStock> GetByProductId(int productId);
        WarehouseStock Save(int productId, int quantity);
    }

    public class WarehouseService : IWarehouseService
    {
        private readonly OnlineDvdsContext _context;

        public WarehouseService(OnlineDvdsContext context)
        {
            _context = context;
        }

        public int GetQuantityProduct(int productId)
        {
            var warehouseStock = _context.WarehouseStocks
                .FirstOrDefault(ws => ws.ProductId == productId);

            if (warehouseStock == null)
            {
                throw new Exception("Warehouse stock not found for this product.");
            }

            return warehouseStock.StockQuantity ?? 0;
        }

        public List<WarehouseStock> GetByProductId(int productId)
        {
            return _context.WarehouseStocks
                .Where(ws => ws.ProductId == productId)
                .ToList();
        }

        public WarehouseStock Save(int productId, int quantity)
        {
            var product = _context.Products.Find(productId);
            if (product == null)
            {
                throw new Exception("Not found product by Id");
            }

            var warehouseStock = _context.WarehouseStocks
                .FirstOrDefault(ws => ws.ProductId == productId);

            if (warehouseStock != null)
            {
                warehouseStock.StockQuantity = quantity;
                warehouseStock.UpdatedAt = DateTime.UtcNow;
                _context.WarehouseStocks.Update(warehouseStock);
            }
            else
            {
                warehouseStock = new WarehouseStock
                {
                    ProductId = productId,
                    StockQuantity = quantity,
                    CreatedAt = DateTime.UtcNow
                };
                _context.WarehouseStocks.Add(warehouseStock);
            }

            _context.SaveChanges();
            return warehouseStock;
        }
    }
}
*/