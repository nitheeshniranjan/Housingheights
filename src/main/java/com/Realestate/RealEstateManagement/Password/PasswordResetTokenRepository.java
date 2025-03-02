package com.Realestate.RealEstateManagement.Password;

import com.Realestate.RealEstateManagement.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface PasswordResetTokenRepository extends JpaRepository<PasswordResetToken, Long> {
  Optional<PasswordResetToken> findByToken(String token);
  Optional<PasswordResetToken> findByUser(User user);
}
