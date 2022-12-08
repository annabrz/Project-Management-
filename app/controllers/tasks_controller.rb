class TasksController < ApplicationController
    
    def index 
        tasks = Task.all
        render json: tasks, status: :ok
    end

    def show 
        task = Task.find(params[:id])
        render json: task, status: :ok
    end

    def create
        task = Task.create!(task_params)
        render json: task, status: :accepted
    end

    def update
        task = Task.find(params[:id])
        task.update(task_params)
        render json: task, status: :accepted
    end

    def destroy
        task = Task.find(params[:id])
        task.destroy
        head :no_content
    end

    private

    def task_params
        # params.permit(:content)
        params.permit(:content, :project_id)
    end 
    def render_not_found_response
        render json: { error: "Task not found" }, status: :not_found
    end
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
        params.permit(:content, :user_id, :project_id)
    end
end
