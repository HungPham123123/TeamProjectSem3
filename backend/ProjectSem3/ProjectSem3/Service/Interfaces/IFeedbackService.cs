using ProjectSem3.DTOs;

namespace ProjectSem3.Service.Interfaces
{
    public interface IFeedbackService
    {
        Task<List<FeedbackManageDTO>> GetAllFeedbacksAsync();
        Task DeleteFeedbackAsync(int feedbackId);
        Task ReplyToFeedbackAsync(int feedbackId, string replyText);
        Task<List<FeedbackManageDTO>> SearchFeedbacksAsync(string keyword);
    }
}
