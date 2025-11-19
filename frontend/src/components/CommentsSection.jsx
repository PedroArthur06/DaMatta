import React, { useState } from "react";
import { MessageCircle, ThumbsUp, Send, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { mockComments } from "../mockData";
import { toast } from "sonner";

export const CommentsSection = () => {
  const [comments, setComments] = useState(mockComments);
  const [newComment, setNewComment] = useState({ author: "", text: "" });
  const [likedComments, setLikedComments] = useState([]);

  const handleLike = (commentId) => {
    if (likedComments.includes(commentId)) {
      toast.info("Você já curtiu este comentário!");
      return;
    }

    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? { ...comment, likes: comment.likes + 1 }
          : comment
      )
    );
    setLikedComments([...likedComments, commentId]);
    toast.success("Comentário curtido!");
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();

    if (!newComment.author.trim() || !newComment.text.trim()) {
      toast.error("Por favor, preencha todos os campos!");
      return;
    }

    const comment = {
      id: comments.length + 1,
      author: newComment.author,
      text: newComment.text,
      date: new Date().toISOString().split("T")[0],
      likes: 0,
    };

    setComments([comment, ...comments]);
    setNewComment({ author: "", text: "" });
    toast.success("Comentário adicionado com sucesso!");
  };

  return (
    <section
      id="comments"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-yellow-50 to-white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <MessageCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comentários
          </h2>
          <p className="text-xl text-gray-600">
            Compartilhe suas reflexões sobre a obra de DaMatta
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded mt-4"></div>
        </div>

        {/* Comment Form */}
        <Card className="border-2 border-blue-200 shadow-xl mb-12">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50">
            <CardTitle className="text-gray-800">
              Deixe seu comentário
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmitComment} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Seu nome
                </label>
                <Input
                  type="text"
                  placeholder="Digite seu nome"
                  value={newComment.author}
                  onChange={(e) =>
                    setNewComment({ ...newComment, author: e.target.value })
                  }
                  className="w-full border-2 border-gray-200 focus:border-blue-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Comentário
                </label>
                <Textarea
                  placeholder="Compartilhe suas reflexões sobre Roberto DaMatta..."
                  value={newComment.text}
                  onChange={(e) =>
                    setNewComment({ ...newComment, text: e.target.value })
                  }
                  className="w-full min-h-[120px] border-2 border-gray-200 focus:border-blue-400 transition-colors"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Enviar Comentário</span>
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Comments List */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Comentários recentes ({comments.length})
          </h3>
          {comments.map((comment) => (
            <Card
              key={comment.id}
              className="border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-800">
                        {comment.author}
                      </h4>
                      <span className="text-sm text-gray-500">
                        {comment.date}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {comment.text}
                    </p>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => handleLike(comment.id)}
                        className={`flex items-center space-x-2 transition-colors ${
                          likedComments.includes(comment.id)
                            ? "text-blue-600"
                            : "text-gray-500 hover:text-blue-600"
                        }`}
                      >
                        <ThumbsUp
                          className={`w-5 h-5 ${
                            likedComments.includes(comment.id)
                              ? "fill-current"
                              : ""
                          }`}
                        />
                        <span className="font-medium">{comment.likes}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommentsSection;
