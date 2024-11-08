namespace ProjectSem3.Service.Interfaces
{
    public interface ISGMService<T> where T : class
    {
        Task<List<T>> GetAllAsync();
        Task<T?> GetByIdAsync(int id);
        Task AddAsync(T item);
        Task UpdateAsync(T item);
        Task DeleteAsync(int id);
        Task<List<T>> SearchAsync(string searchTerm);
    }


}
