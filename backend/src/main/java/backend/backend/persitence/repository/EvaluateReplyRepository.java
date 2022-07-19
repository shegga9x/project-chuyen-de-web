package backend.backend.persitence.repository;

import backend.backend.persitence.entities.EvaluateReply;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EvaluateReplyRepository extends JpaRepository<EvaluateReply, Integer> {

    EvaluateReply getByIdEvaluate(int idEvaluate);
}
