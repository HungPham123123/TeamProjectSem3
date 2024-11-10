using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ProjectSem3.Data;
using ProjectSem3.DTOs;
using ProjectSem3.Models;
using ProjectSem3.Service.Interfaces;

namespace ProjectSem3.Service
{
    public class FeedbackService : IFeedbackService
    {
        private readonly OnlineDvdsContext _context;
        private readonly IMapper _mapper;

        public FeedbackService(OnlineDvdsContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // Lấy tất cả feedbacks
        public async Task<List<FeedbackManageDTO>> GetAllFeedbacksAsync()
        {
            var feedbacks = await _context.Feedbacks.Include(f => f.User).ToListAsync();
            return _mapper.Map<List<FeedbackManageDTO>>(feedbacks);
        }

        // Xóa feedback
        public async Task DeleteFeedbackAsync(int feedbackId)
        {
            var feedback = await _context.Feedbacks.FindAsync(feedbackId);
            if (feedback != null)
            {
                _context.Feedbacks.Remove(feedback);
                await _context.SaveChangesAsync();
            }
            else
            {
                throw new KeyNotFoundException("Feedback không tìm thấy.");
            }
        }

        // Trả lời feedback
        public async Task ReplyToFeedbackAsync(int feedbackId, string replyText)
        {
            var feedback = await _context.Feedbacks.FindAsync(feedbackId);
            if (feedback == null)
                throw new KeyNotFoundException("Feedback không tìm thấy.");

            feedback.AdminReply = replyText;
            await _context.SaveChangesAsync();
        }

        // Tìm kiếm feedbacks
        public async Task<List<FeedbackManageDTO>> SearchFeedbacksAsync(string keyword)
        {
            var feedbacks = await _context.Feedbacks
                .Include(f => f.User)
                .Where(f => f.FeedbackText.Contains(keyword) ||
                            f.AdminReply.Contains(keyword) ||
                            f.User.Username.Contains(keyword))
                .ToListAsync();

            return _mapper.Map<List<FeedbackManageDTO>>(feedbacks);
        }
    }
}
